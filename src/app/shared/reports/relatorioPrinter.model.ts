export class RelatorioPrinter {
    public impressao: string;
 
    constructor(dados: any) {
        this.paint(dados);
    }
 
    public print(): void {
        const params = [
           '', 
           '_blank', 
           'height=10,width=10'
        ]
 
        const popup = window.open(...params);
 
        popup.document.open();
        popup.document.write(this.impressao);
        popup.document.close();
    }
 
    public paint(dados: any): void {
        this.impressao = `<!DOCTYPE html>
                       <html>
                         <head>
                            <style>
                            /* SEU ESTILO AQUI */
                            </style>
                         </head>
                         <body onload="window.print()">`;
 
         this.impressao += `SEU HTML AQUI ${dados.SEUS_DADOS_AQUI}`;
         this.impressao += '</body></html>';
    }
 }