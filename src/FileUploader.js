import React, { Component } from 'react';
import {ExcelRenderer, OutTable} from 'react-excel-renderer';
import {postData} from './BackendAccessor'

class FileUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {file: ""};
        this.openFile= this.openFile.bind(this);
        this.fileUpload = React.createRef()
        this.submitdata = this.submitdata.bind(this);
    }
    openFile(e) {
        console.log(e)
        ExcelRenderer(e.target.files[0],(err,resp) => {
            if(err){
                console.log(err);
            }
            else{
                this.setState({
                    cols: resp.cols,
                    rows: resp.rows
                })
            }
        })

        // this.setState(state => ({
        //     file: this.fileUpload.files[0]
        // }), () => {console.log(this.state.file)});
        console.log("file upload")
        console.log(this.state);
    }
    render() {
        console.log(this.state)
        let table=null;if(this.state.rows){table=(<OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />)}
        return (
            <div>
            <input id={"excel"} label='Upload File' type="file" className="file-uploader"
              onChange={this.openFile} ref={(ref) => this.fileUpload = ref}>
              </input>
             {table}
             <button onClick = {this.submitdata}>
                Submit
              </button>
              </div>
        )}
      submitdata(){
        postData ("allValidationChecks", {rows:this.state.rows, cols: this.state.cols})
      }

}

 export default FileUploader;
