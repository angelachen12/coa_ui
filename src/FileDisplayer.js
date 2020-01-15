import {ExcelRenderer, OutTable} from 'react-excel-renderer';

fileHandler = (event) => {
    let fileObj = event.target.files[0];
    
    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if(err){
        console.log(err);            
      }
      else{
        this.setState({
          cols: resp.cols,
          rows: resp.rows
        });
      }
    });               
    
    }

    

    <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />




    