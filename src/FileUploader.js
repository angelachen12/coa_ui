import React, { Component } from 'react';

class FileUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {file: ""};
        this.openFile= this.openFile.bind(this);
        this.fileUpload = React.createRef()
    }
    openFile() {
        this.setState(state => ({
            file: this.fileUpload.files[0] 
        }), () => {console.log(this.state.file)});
        console.log("file upload")
        console.log(this.state);
    }
    render() { 
        return (
            <div> 
            <input id={"excel"} label='Upload File' type="file" className="file-uploader"
              onChange={this.openFile} ref={(ref) => this.fileUpload = ref}>
              </input>
              </div>
        )}

    
}

 export default FileUploader;
