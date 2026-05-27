/**
 * InventoryPrintView — dummy data print layout matching STAMPA_INVENTARIO_PDF.
 *
 * HOW IT WORKS:
 *   - The component renders hidden on screen (display:none)
 *   - triggerPrint() mounts it temporarily and calls window.print()
 *   - @media print CSS hides #root and shows only this element
 *   - Replace DUMMY_* constants with real data when backend is ready
 *
 * USAGE:
 *   import { triggerPrint } from '../print/InventoryPrintView';
 *   <button onClick={triggerPrint}>PDF</button>
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

// ─── DUMMY DATA — replace with real data later ──────────────────────────────

const DUMMY_META = {
  pdv:       'CESENATICO',
  company:   'AMODO CESENATICO',
};

const DUMMY_INVENTORY = {
  id:        152,
  date:      '2026-02-02',
  warehouse: 'MAGAZZINO CENTRALE',
  totalValue: 8472.71,
};

const DUMMY_ITEMS = [
  { code: 'SM-0283X', name: 'PANCAKE PEZZO',                  category: 'MATERIA PRIMA', umxct: '1PZx',      ct: 22,  sfuso: 0,    unitCost: 0.286  },
  { code: 'Q-0035',   name: 'ACQUA FRIZZANTE 0,5L PET',        category: 'BEVANDE',       umxct: '24PZxCT',   ct: 5,   sfuso: 10,   unitCost: 0.159  },
  { code: 'QFL-0263', name: 'ACQUA FRIZZANTE PLASTICA 1,5LT',  category: 'BEVANDE',       umxct: '6PZxCT',    ct: 8,   sfuso: 0,    unitCost: 0.397  },
  { code: 'QFL-0250', name: 'ACQUA FRIZZANTE VETRO 50cl',      category: 'BEVANDE',       umxct: '20PZxCT',   ct: 5,   sfuso: 16,   unitCost: 0.258  },
  { code: 'Q-0034',   name: 'ACQUA NATURALE 0,5L PET',         category: 'BEVANDE',       umxct: '24PZxCT',   ct: 8,   sfuso: 21,   unitCost: 0.159  },
  { code: 'QFL-0230', name: 'BITTER CAMPARI 100CL',            category: 'BEVANDE',       umxct: '1LTxPZ',    ct: 6,   sfuso: 0.4,  unitCost: 14.24  },
  { code: 'QFL-0778', name: 'COCA COLA 33CL BOTTIGLIA',        category: 'BEVANDE',       umxct: '24PZxCT',   ct: 2,   sfuso: 11,   unitCost: 0.776  },
  { code: 'Q-0001',   name: 'CAFFE',                           category: 'CAFFE',         umxct: '6KGxCT',    ct: 5,   sfuso: 1.5,  unitCost: 20     },
  { code: 'Q-0598',   name: 'CAFFE DECAFFEINATO 50PZ',         category: 'CAFFE',         umxct: '50PZxCT',   ct: 2,   sfuso: 0,    unitCost: 0.161  },
  { code: 'Q-0133',   name: 'ZUCCHERO BIANCO',                 category: 'CAFFE',         umxct: '2850PZxCT', ct: 2,   sfuso: 0,    unitCost: 0.009  },
  { code: 'Q1143',    name: 'CIOCCO CALDA FONDENTE 8X1KG',     category: 'CIOCCOLATO',    umxct: '8KGxCT',    ct: 1,   sfuso: 0,    unitCost: 18.41  },
  { code: 'Q1142',    name: 'CIOCCO CALDA LATTE 8X1KG',        category: 'CIOCCOLATO',    umxct: '8KGxCT',    ct: 1,   sfuso: 4,    unitCost: 18.41  },
  { code: 'Q-0332',   name: 'CIOCCOLATO FONTANA BIANCO 20KG',  category: 'CIOCCOLATO',    umxct: '20KGxCT',   ct: 0,   sfuso: 12.45,unitCost: 15.6   },
  { code: 'Q-0515',   name: 'PANE TOAST',                      category: 'CUCINA',        umxct: '23PZxCO',   ct: 4,   sfuso: 0,    unitCost: 0      },
  { code: 'QFL-0191', name: 'PEPERONI GRIGLIATI',              category: 'CUCINA',        umxct: '6KGxCT',    ct: 0,   sfuso: 1,    unitCost: 5.307  },
  { code: 'Q1123',    name: 'CROISSANT BURRO 70G',             category: 'DA FORNO',      umxct: '60PZxCT',   ct: 6,   sfuso: 57,   unitCost: 0.35   },
  { code: 'Q1177',    name: 'CROISSANT MULTICEREALI 80G',      category: 'DA FORNO',      umxct: '54PZxCT',   ct: 5,   sfuso: 8,    unitCost: 0.414  },
  { code: 'Q1134',    name: 'AGROLINA CIACULLI 2.75KG',        category: 'GELATO',        umxct: '2.75KGxPZ', ct: 2,   sfuso: 0,    unitCost: 22.86  },
  { code: 'Q1167',    name: 'MISCELA FIORDILATTE',             category: 'GELATO',        umxct: '6PZxCT',    ct: 4,   sfuso: 0,    unitCost: 6.31   },
  { code: 'Q1130',    name: 'PASTA PISTACCHIO PURO 2.5KG',     category: 'GELATO',        umxct: '2.5KGxPZ',  ct: 0,   sfuso: 2,    unitCost: 47.4   },
  { code: 'Q1185',    name: 'CREMA DI PISTACCHIO DOLCE 5KG',   category: 'GUARNIZIONI',   umxct: '5KGxPZ',    ct: 2,   sfuso: 2.869,unitCost: 9.6    },
  { code: 'QFL-0012', name: 'NUTELLA',                         category: 'GUARNIZIONI',   umxct: '6KGxCO',    ct: 2,   sfuso: 5.942,unitCost: 6.5    },
  { code: 'Q0970',    name: 'CREMA PASTICCERA',                category: 'GUARNIZIONI',   umxct: '10KGxCT',   ct: 1,   sfuso: 7.065,unitCost: 6.389  },
  { code: 'QFL-0714', name: 'SALE ADDOLCITORE 25KG',           category: 'MAT. CONSUMO',  umxct: '25KGxPZ',   ct: 2,   sfuso: 0,    unitCost: 0.22   },
  { code: 'QFL-0062', name: 'ARANCE',                          category: 'ORTOFRUTTA',    umxct: '1KGxKG',    ct: 7,   sfuso: 0,    unitCost: 2.286  },
  { code: 'QFL-0066', name: 'LIMONI',                          category: 'ORTOFRUTTA',    umxct: '1KGxKG',    ct: 0,   sfuso: 1.67, unitCost: 4.167  },
  { code: 'PK0033',   name: 'SOTTOCIALDA AMODO',               category: 'PACKAGING',     umxct: '7000PZxCT', ct: 1,   sfuso: 0,    unitCost: 0.042  },
  { code: 'PK0036',   name: 'COPPETTA CARTA T.16B AMODO',      category: 'PACKAGING',     umxct: '8COxCT',    ct: 0,   sfuso: 5,    unitCost: 20.325 },
  { code: 'PK0022',   name: 'CONTENITORE ASPORTO GELATO 1KG',  category: 'PACKAGING',     umxct: '50PZxCT',   ct: 1,   sfuso: 2,    unitCost: 0.806  },
  { code: 'DET0014',  name: 'SEPTOGARD',                       category: 'PULIZIE',       umxct: '1COxCO',    ct: 2,   sfuso: 0,    unitCost: 95.5   },
  { code: 'DET001',   name: 'BOBINA JOY 800 STRATI 2PZ',       category: 'PULIZIE',       umxct: '2PZxCO',    ct: 4,   sfuso: 1,    unitCost: 3.495  },
  { code: 'DET0004A', name: 'EASY LAVASTOVIGLIE 11.6KG',       category: 'PULIZIE',       umxct: '1PZxPZ',    ct: 1,   sfuso: 0,    unitCost: 24.68  },
  { code: 'QFL-0040A',name: 'FORMAGGIO SPALMABILE 1KG',        category: 'SUPERFRESCHI',  umxct: '1KGxPZ',    ct: 2,   sfuso: 0,    unitCost: 6.961  },
  { code: 'Q-0006',   name: 'LATTE FRESCO AQ BOTT LT',         category: 'SUPERFRESCHI',  umxct: '1LTxPZ',    ct: 20,  sfuso: 0,    unitCost: 1.074  },
  { code: 'Q-0008',   name: 'PANNA FRESCA LT',                 category: 'SUPERFRESCHI',  umxct: '1LTxPZ',    ct: 4,   sfuso: 0,    unitCost: 4.67   },
  { code: 'Q1146',    name: 'EARL GREY PIR 25PZ',              category: 'TE',            umxct: '25PZxCO',   ct: 2,   sfuso: 13,   unitCost: 0.6    },
  { code: 'Q1145',    name: 'ENGLISH BREAK PIR 25PZ',          category: 'TE',            umxct: '25PZxCO',   ct: 2,   sfuso: 13,   unitCost: 0.6    },
  { code: 'Q1194',    name: 'TORTA AMERICAN CHEESECAKE',        category: 'TORTE',         umxct: '1PZxPZ',    ct: 1,   sfuso: 0.875,unitCost: 20.5   },
  { code: 'Q0036',    name: 'TORTA RED VELVET',                category: 'TORTE',         umxct: '1PZxPZ',    ct: 2,   sfuso: 0.58, unitCost: 18.82  },
  { code: 'Q-0829',   name: 'PREPARATO PER PANCAKES',          category: 'VARIE',         umxct: '10KGxCT',   ct: 1,   sfuso: 1,    unitCost: 12.661 },
  { code: 'Q-0827',   name: 'PREPARATO PER CREPES DOLCI',      category: 'VARIE',         umxct: '10KGxCT',   ct: 0,   sfuso: 8,    unitCost: 10.639 },
  { code: 'QFL-0113', name: 'OLIO EXTRAVERGINE',               category: 'VARIE',         umxct: '1LTxPZ',    ct: 1,   sfuso: 0.5,  unitCost: 10.5   },
];

// ─── Print component (hidden on screen) ─────────────────────────────────────

const InventoryDoc = () => {
  const printDate = new Date().toLocaleDateString('it-IT');

  const grouped = {};
  DUMMY_ITEMS.forEach(item => {
    if (!grouped[item.category]) grouped[item.category] = [];
    grouped[item.category].push(item);
  });
  const categories = Object.keys(grouped).sort();

  const rowVal = (item) => ((item.ct ?? 0) + (item.sfuso ?? 0)) * (item.unitCost ?? 0);
  const catTotals = categories.map(cat => ({
    cat,
    total: grouped[cat].reduce((s, i) => s + rowVal(i), 0),
  }));

  return (
    <div id="ipv-root">
      <style>{`
        #ipv-root { display: none; }
        @media print {
          #root > * { display: none !important; }
          #ipv-root {
            display: block !important;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 8pt;
            color: #111;
            background: white;
          }
          @page { margin: 10mm; }
          .ipv-cat-block { page-break-inside: avoid; }
        }
        .ipv-header { text-align:right; font-size:7.5pt; line-height:1.8; margin-bottom:14px; }
        .ipv-header b { font-size:9pt; }
        .ipv-title { text-align:center; font-size:12pt; font-weight:700; text-transform:uppercase; margin:0 0 16px; }
        .ipv-summary { width:60%; margin:0 auto 18px; border-collapse:collapse; font-size:8pt; }
        .ipv-summary td { padding:2px 8px; }
        .s-group { font-weight:700; }
        .s-sub { padding-left:20px !important; font-style:italic; }
        .s-val { text-align:right; }
        .s-tot { font-weight:700; border-top:1.5px solid #333; }
        .ipv-hr { border:none; border-top:1px solid #aaa; margin:10px 0; }
        .ipv-table { width:100%; border-collapse:collapse; font-size:7.5pt; }
        .ipv-table th { background:#efefef; font-weight:700; padding:3px 5px; border-bottom:1.5px solid #999; text-align:left; white-space:nowrap; }
        .ipv-table th.r, .ipv-table td.r { text-align:right; }
        .ipv-table td { padding:2px 5px; border-bottom:1px solid #e5e5e5; }
        .ipv-table tr:nth-child(even) td { background:#fafafa; }
        .ipv-cat-hdr td { background:#e2e2e2; font-weight:700; text-transform:uppercase; letter-spacing:.04em; padding:3px 5px; border:none; font-size:7.5pt; }
        .ipv-cat-sub td { text-align:right; font-weight:700; border-top:1px solid #bbb; padding:2px 5px; font-size:8pt; background:#f5f5f5; }
        .ipv-code { font-family:monospace; font-size:7pt; color:#555; }
        .ipv-footer { display:flex; justify-content:space-between; margin-top:14px; font-size:7pt; color:#888; border-top:1px solid #ddd; padding-top:4px; }
        .ipv-logo { font-weight:900; font-size:9pt; color:#2d7a4f; letter-spacing:.08em; }
      `}</style>

      <div className="ipv-header">
        <div>Data stampa: {printDate}</div>
        <div>PUNTO VENDITA: <b>{DUMMY_META.pdv}</b></div>
        <div>Inventario magazzino <b>#{DUMMY_INVENTORY.id}</b> Data: <b>{DUMMY_INVENTORY.date}</b></div>
      </div>

      <div className="ipv-title">MC — {DUMMY_INVENTORY.warehouse}</div>

      <table className="ipv-summary">
        <tbody>
          <tr><td className="s-group">Gruppo merceologico</td><td className="s-group">Reparto</td><td className="s-val s-group">Valore</td></tr>
          <tr><td className="s-group">MATERIA PRIMA</td><td></td><td className="s-val s-group">{DUMMY_INVENTORY.totalValue.toFixed(2)}</td></tr>
          {catTotals.map(({ cat, total }) => (
            <tr key={cat}><td></td><td className="s-sub">{cat}</td><td className="s-val">{total.toFixed(2)}</td></tr>
          ))}
          <tr><td className="s-tot">TOT</td><td></td><td className="s-val s-tot">{DUMMY_INVENTORY.totalValue.toFixed(2)}</td></tr>
        </tbody>
      </table>

      <hr className="ipv-hr" />

      <table className="ipv-table">
        <thead>
          <tr>
            <th style={{width:70}}>Reparto</th>
            <th style={{width:75}}>Articolo</th>
            <th>Descrizione</th>
            <th style={{width:70}}>UM2xUM1</th>
            <th className="r" style={{width:32}}>UM1</th>
            <th className="r" style={{width:32}}>UM2</th>
            <th className="r" style={{width:45}}>Qta UM2</th>
            <th className="r" style={{width:55}}>Valore UM2</th>
            <th className="r" style={{width:55}}>Valore tot</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(cat => {
            const catItems = grouped[cat];
            const catTotal = catItems.reduce((s, i) => s + rowVal(i), 0);
            return (
              <React.Fragment key={cat}>
                {catItems.map((item, idx) => {
                  const ct    = item.ct    ?? 0;
                  const sfuso = item.sfuso ?? 0;
                  const qty   = ct + sfuso;
                  const cost  = item.unitCost ?? 0;
                  return (
                    <tr key={item.code}>
                      <td>{idx === 0 ? cat : ''}</td>
                      <td className="ipv-code">{item.code}</td>
                      <td>{item.name}</td>
                      <td>{item.umxct}</td>
                      <td className="r">{ct}</td>
                      <td className="r">{sfuso}</td>
                      <td className="r">{qty}</td>
                      <td className="r">{cost > 0 ? cost.toFixed(3) : '0'}</td>
                      <td className="r">{(qty * cost).toFixed(2)}</td>
                    </tr>
                  );
                })}
                <tr className="ipv-cat-sub">
                  <td colSpan={8}></td>
                  <td>{catTotal.toFixed(2)}</td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>

      <div className="ipv-footer">
        <span className="ipv-logo">▶ FACTORY</span>
        <span>{DUMMY_META.company}</span>
      </div>
    </div>
  );
};

// ─── triggerPrint — mount doc, print, then clean up ─────────────────────────

export function triggerPrint() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = ReactDOM.createRoot(container);
  root.render(<InventoryDoc />);
  setTimeout(() => {
    window.print();
    setTimeout(() => {
      root.unmount();
      document.body.removeChild(container);
    }, 1000);
  }, 80);
}

export default InventoryDoc;