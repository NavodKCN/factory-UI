/**
 * OrderPrintView — dummy data print layout matching STAMPA_ORDINE_PDF.
 *
 * HOW IT WORKS: same as InventoryPrintView.
 * Replace DUMMY_* constants with real order data when backend is ready.
 *
 * USAGE:
 *   import { triggerPrint } from '../print/OrderPrintView';
 *   <button onClick={triggerPrint}>PDF</button>
 *
 * To print a specific order, call:
 *   triggerPrint(orderData)   ← optional, falls back to dummy
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

// ─── DUMMY DATA — replace with real data later ──────────────────────────────

const DUMMY_ORDER = {
  id:                2508,
  transmittedAt:    '04/05/2026 05:24',
  requestedDelivery: '05/05/2026',
  insertedBy:       'AMMINISTRATORE',
  supplier: {
    name:    'TRE VALLI',
    address: 'Via Piandelmedico, 74',
    postal:  '60035 - Jesi',
    email:   'ordini@bullgroup.it,ordinipv@bullgroup.it',
  },
  destination: {
    name:    'AMODO CESENATICO',
    address: 'VIALE CARDUCCI 6 ANGOLO VIA DEL FORTINO',
    postal:  '47042 - CESENATICO',
    phone:   '0547 1825172',
  },
  items: [
    { code: 'QFL-0040A', name: 'FORMAGGIO SPALMABILE 1KG', qty: 1,  unit: 'PZ 1 KG', price: 6.96  },
    { code: 'Q-0006',    name: 'LATTE FRESCO AQ BOTT LT',  qty: 48, unit: 'PZ 1 LT', price: 1.07  },
    { code: 'Q-0008',    name: 'PANNA FRESCA LT',           qty: 2,  unit: 'PZ 1 LT', price: 4.74  },
  ],
};

// ─── Print component ─────────────────────────────────────────────────────────

const OrderDoc = ({ data = DUMMY_ORDER }) => {
  const total = data.items.reduce((s, i) => s + i.qty * i.price, 0);

  return (
    <div id="opv-root">
      <style>{`
        #opv-root { display: none; }
        @media print {
          #root > * { display: none !important; }
          #opv-root {
            display: block !important;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 8.5pt;
            color: #111;
            background: white;
          }
          @page { margin: 10mm; }
        }
        .opv-header { text-align:right; font-size:8pt; line-height:1.8; margin-bottom:20px; }
        .opv-header b { font-size:9.5pt; }
        .opv-addresses { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:14px; }
        .opv-box { border:1px solid #bbb; padding:8px 10px; font-size:8pt; line-height:1.7; }
        .opv-box-label { display:block; font-weight:700; margin-bottom:3px; }
        .opv-meta { font-size:8.5pt; line-height:2.1; margin-bottom:14px; }
        .opv-meta b { font-weight:700; }
        .opv-table { width:100%; border-collapse:collapse; font-size:8pt; margin-bottom:16px; }
        .opv-table th { background:#f2f2f2; font-weight:700; padding:4px 8px; border-bottom:1.5px solid #999; text-align:left; }
        .opv-table th.r, .opv-table td.r { text-align:right; }
        .opv-table td { padding:5px 8px; border-bottom:1px solid #e2e2e2; }
        .opv-table tr:nth-child(even) td { background:#f8f8f8; }
        .opv-code { font-family:monospace; font-size:7.5pt; color:#555; }
        .opv-totals { text-align:right; font-size:9pt; line-height:2.2; }
        .opv-totals b { font-weight:700; }
        .opv-footer { display:flex; justify-content:space-between; margin-top:24px; font-size:7pt; color:#888; border-top:1px solid #ddd; padding-top:5px; }
        .opv-logo { font-weight:900; font-size:9pt; color:#2d7a4f; letter-spacing:.08em; }
      `}</style>

      <div className="opv-header">
        <div>Fornitore: <b>{data.supplier.name}</b></div>
        <div><b>Ordine #{data.id}</b> Trasmesso il: <b>{data.transmittedAt}</b></div>
      </div>

      <div className="opv-addresses">
        <div className="opv-box">
          <span className="opv-box-label">Fornitore</span>
          <div>{data.supplier.name}</div>
          <div>{data.supplier.address}</div>
          <div>{data.supplier.postal}</div>
          <div>tel. mail: {data.supplier.email}</div>
        </div>
        <div className="opv-box">
          <span className="opv-box-label">Luogo di destinazione</span>
          <div>{data.destination.name}</div>
          <div>{data.destination.address}</div>
          <div>{data.destination.postal}</div>
          <div>tel. {data.destination.phone}</div>
        </div>
      </div>

      <div className="opv-meta">
        <div>Richiesta consegna: <b>{data.requestedDelivery}</b></div>
        <div>Inserito da: {data.insertedBy} {data.insertedBy}</div>
      </div>

      <table className="opv-table">
        <thead>
          <tr>
            <th style={{width:80}}>Codice</th>
            <th>Articolo</th>
            <th className="r" style={{width:40}}>Qta</th>
            <th style={{width:80}}>Unita</th>
            <th className="r" style={{width:55}}>Prezzo</th>
            <th className="r" style={{width:60}}>Totale</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, idx) => (
            <tr key={idx}>
              <td className="opv-code">{item.code}</td>
              <td>{item.name}</td>
              <td className="r">{item.qty}</td>
              <td>{item.unit}</td>
              <td className="r">{item.price.toFixed(2)}</td>
              <td className="r">{(item.qty * item.price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="opv-totals">
        <div>Valore totale ordine: <b>{total.toFixed(2)} EUR</b></div>
        <div>Peso totale ordine: <b>0.0 KG</b></div>
      </div>

      <div className="opv-footer">
        <span className="opv-logo">▶ FACTORY</span>
        <span>Pag. 1</span>
      </div>
    </div>
  );
};

// ─── triggerPrint — mount doc, print, then clean up ─────────────────────────

export function triggerPrint(orderData) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = ReactDOM.createRoot(container);
  root.render(<OrderDoc data={orderData || DUMMY_ORDER} />);
  setTimeout(() => {
    window.print();
    setTimeout(() => {
      root.unmount();
      document.body.removeChild(container);
    }, 1000);
  }, 80);
}

export default OrderDoc;