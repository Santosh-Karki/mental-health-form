import React from 'react';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './Post.css';
import Austin from './Austin-logo.png';


const Post = () => {
    return (
        <>

<div className="container" >
                        <div className="jumbotron mt-3">
                            <div className="grid-container">


                        <div className="row">
                            <div className="col">
                            <Card className="cardImage" style={{ width: '30rem' }}>
                                <Card.Img variant="top" src={Austin} />
                                <Card.Body>
                                    
                                      <Card.Text>
                                      <b>Hospital Outreach<br></br>
                                      Post-suicide Engagement (HOPE)<br></br>
                                       E-Referral Form</b>
                                          </Card.Text>
                                          </Card.Body>
                                          </Card>
                        
                                </div>
                                 <div className="col">
                                  <div className="Patient">

                                  {/* Patient details here */}
                                      <>  
                                      <Form.Group  className="P-label"md="4" controlId="validationCustom01">
                                        <Form.Label> U.R Number:</Form.Label>
                                        <Form.Control  required type="text" placeholder="UR Number"                                  
                                        /></Form.Group>
                                        
                                        
                                        <Form.Group  className="P-label"md="4" controlId="validationCustom01">
                                        <Form.Label >Family Name:</Form.Label>
                                        <Form.Control required type="text" placeholder="Surname"                                  
                                        /></Form.Group>
                                        
                                        <Form.Group  className="P-label"md="4" controlId="validationCustom01">
                                        <Form.Label >Given Name:</Form.Label>
                                        <Form.Control required name ="name" type="text" placeholder="Given Name"                                  
                                        /></Form.Group>

                                        <Form.Group  className="P-label"md="4" controlId="validationCustom01">
                                        <Form.Label >Date of Birth:</Form.Label>
                                        <Form.Control  required name ="dob" type="text" placeholder="Date of Birth"                                  
                                        /></Form.Group>                         
                                         
                                    </></div>
                                     </div>
                                     </div>
                                     
                                     <div className="row">
                                         <div className="col">
                                             <div className="Paragraph">
                                             <p><b> HOPE provides 12 weeks of psychosocial and therapeutic support to consumers post a suicide attempt or experience of suicidal ideation. 
                                                 Consumers must be 18+ years and reside in the Banyule or Nillumbik regions. For more information please call the HOPE Team Leader on.
                                                 For more urgent assessments (including for acute risk or crisis assessment) call the North East Area Mental Health Triage Service 1300-859-789
                                                 <br></br>**Referrals will only be ACCEPTED if entire form is complete**</b> </p>
                                               </div>
                                               </div>
                                               </div>

                                                    {/* for this row, table content is applied. 
                                                    This grid has two column.
                                                    Below column cointain one table*/}

                                                <div className="row">
                                                <div className="col">   
                                                <div className="Patient">


                                                            {/* Patient details here */}
   
                                                     <>     
                                                    <table className="table">
                                                    <thead>
                                                    <tr>
                                                    <th scope="col">Personal Details</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                    <th scope="row">
                                                    
                                                    <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                                                        <Form.Control type="name" placeholder="Put your name" />
                                                        </FloatingLabel> 

                                                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                                        <Form.Control  type="email" placeholder="Place your email address" />
                                                        </FloatingLabel>   

                                                        <FloatingLabel controlId="floatingInput" label="Phone" className="mb-3">
                                                        <Form.Control  type="phone" placeholder="put your phone number" />
                                                        </FloatingLabel> 
                                                        
                                                        
                                                        <FloatingLabel controlId="floatingSelectGrid" label="Gender">
                                                            <Form.Select   aria-label="Floating label select example">                                                         
                                                                
                                                                <option value="1">Male</option>
                                                                <option value="2">Female</option>
                                                                <option value="2">Other</option>
                                                            </Form.Select>
                                                            </FloatingLabel><br></br>
                                                        

                                                        <FloatingLabel controlId="floatingInput" label="Date of Birth" className="mb-3">
                                                        <Form.Control  type="dob" placeholder="date of birth" />
                                                        </FloatingLabel>

                                                        <FloatingLabel controlId="floatingInput" label="NOK" className="mb-3">
                                                        <Form.Control type="NOK" placeholder="place your nok" />
                                                        </FloatingLabel>
                                                        </th>
                                                               
                                
                                                    </tr>                                              
                                                    </tbody>
                                                    </table> </>
                                                    </div>
                                                    </div>
                                                    


                                                    
                                                    {/* This grid has another table content. */}
                                                        
                                                <div className="col">
                                                <div className="Patient">    
                                                    <table className="table">
                                                    <thead>
                                                    <tr>
                                                    <th scope="col">Referral Details</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                    <th scope="row">
                                                    
                                                    <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                                                        <Form.Control placeholder="Put your name" />
                                                        </FloatingLabel>
      
                                                        <FloatingLabel controlId="floatingInput" label="Address" className="mb-3">
                                                        <Form.Control  type="adress" placeholder="Place your address here" />
                                                        </FloatingLabel>

                                                        <FloatingLabel controlId="floatingInput" label="Phone" className="mb-3">
                                                        <Form.Control type="phone" placeholder="phone number" />
                                                        </FloatingLabel>


                                                        <FloatingLabel controlId="floatingInput" label="Fax" className="mb-3">
                                                        <Form.Control type="fax" placeholder="fax" />
                                                        </FloatingLabel>


                                                        <FloatingLabel controlId="floatingInput" label="Referral Date" className="mb-3">
                                                        <Form.Control type="referral date" placeholder="place your referral date" />
                                                        </FloatingLabel>

                                                        <FloatingLabel controlId="floatingInput" label="Does the client consent to referral (Yes/NO):" className="mb-3">
                                                        <Form.Control type="confirmation" placeholder="yes/no" />
                                                        </FloatingLabel>
                                                    </th>
                                                    </tr>                                              
                                                    </tbody>
                                                    </table> 
                                                    </div>
                                                    </div>
                                                </div>



                     
                                    <div className="row">
                                    <div className="col" style={{ textalign: 'left' }}>
                                    <div className="well well-sm">
                                        <form className="form-horizontal" method="post">                  
                                            
                                            <fieldset>                                   
                                            

                                            <div className="form-group">
                                                    <label> Presenting Problems: (symptoms, duration, current level of functioning, level of distress, insight)</label>                                                  
                                                    <textarea className="form-control" name="content" placeholder="Enter your text here" rows="4"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <label> Reason for Referral:</label>                                                  
                                                    <textarea className="form-control" name="content" placeholder="Enter your text here" rows="4"></textarea>
                                                </div>

                                                <div className="form-group">
                                                <label><b>Current Risk: (For urgent/acute psychiatric assessment call NE Triage 1300-859-789)</b><br></br>
                                                    To self (including current thoughts, intent and/or plan, previous attempts)</label>                                                  
                                                    <textarea className="form-control" name="content" placeholder="Enter your text here" rows="4"></textarea>
                                                </div>

                                                <div className="form-group">
                                                <label><b>Current Risk: (For urgent/acute psychiatric assessment call NE Triage 1300-859-789)</b><br></br>
                                                    To others (including current thoughts, intent and/or plan, previous violence/aggression)<br></br>
                                                    *** Please include any risk to health professionals</label>                                                  
                                                    <textarea className="form-control" name="content" placeholder="Enter your text here" rows="4"></textarea>
                                                </div>

                                                

                                                <div className="form-group">
                                                <label>Forensic History:</label>                                                  
                                                    <textarea className="form-control" name="content" placeholder="Enter your text here" rows="4"></textarea>
                                                </div>

                                                <div className="form-group">
                                                <label>Past Psychiatric History:</label>                                                  
                                                    <textarea className="form-control" name="content" placeholder="Enter your text here" rows="4"></textarea>
                                                </div>

                                                <div className="form-group">
                                                <label>Medical History including current Medication(if known):</label>                                                  
                                                    <textarea className="form-control" name="content" placeholder="Enter your text here" rows="4"></textarea>
                                                </div>

                                                <div className="form-group">
                                                <label>Drugs & Alcohol (List Substances):</label>                                                  
                                                    <textarea className="form-control" name="content" placeholder="Enter your text here" rows="4"></textarea>
                                                </div>

                                                <div className="form-group">
                                                <label textalign="right">Brief Personal History: (Living circumstances, employment, relationships, children)</label>                                                  
                                                    <textarea className="form-control" name="content" placeholder="Enter your text here" rows="4"></textarea>
                                                </div>

                                                <div className="form-group">
                                                <label textalign="right">Other Current Supports (eg. private psychologist, counsellor, NDIS, Child Protection etc.):</label>                                                  
                                                    <textarea className="form-control" name="content" placeholder="Enter your text here" rows="4"></textarea>
                                                </div>


                                               
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col" >
                            <div className="submission" >
                                <div className="form-group" >
                                  <button type="button"className="btn btn-primary btn-lg" onClick={() => window.print()}> Submit</button>
                                </div>
                                </div>
                                </div>
                                </div>
                        </div>
                    </div>
                    </div>
  </>
    
  );
}

export default Post;
 


