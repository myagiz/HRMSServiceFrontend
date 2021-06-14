import React from 'react'
import {
    Segment,
    Form,
    TextArea,
    Input,
  } from "semantic-ui-react";

export default function AdvertisementGeneral() {
    return (
        <div>
        <Segment color="violet">
         <h5>Genel Bilgiler</h5>
         <Form.Field
           id="form-textarea-control-opinion"
           control={TextArea}
           placeholder="İş Hakkında Genel Bilgileriniz..."
         />
         <Form.Field
           id="form-input-control-first-name"
           control={Input}
           placeholder="Açık Pozisyon Sayısı"
         />
         <Form.Group widths="equal">
           <Form.Field
             id="form-input-control-first-name"
             control={Input}
             placeholder="Minimum Maaş Tutarı"
           />
           <Form.Field
             id="form-input-control-last-name"
             control={Input}
             placeholder="Maksimum Maaş Tutarı"
           />
         </Form.Group>
         <Form.Group widths="equal">
           <Form.Field
             id="form-input-control-first-name"
             control={Input}
             placeholder="İlan Yayınlama Tarihi"
           />
           <Form.Field
             id="form-input-control-last-name"
             control={Input}
             placeholder="İlan Sona Erme Tarihi"
           />
         </Form.Group>
       </Segment>  
       <br/>
     </div>
    )
}
