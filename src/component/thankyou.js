import React,{useState}from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Post from './Post';

const Thanks = () => {
    return (
        <> 
        
        <div className="container" align="center">
        <Card style={{width: '50rem' }}>
  <Card.Body>
    <Card.Title>Thank You</Card.Title>
    <Card.Text>
For all urgent/acute psychiatric assessments call NE Triage 1300-859-789.<br></br>
We will contact you with the outcome of this referral.
    </Card.Text>
    {/* <Button variant="primary"  onClick={() => Post.window.print()}>Go somewhere</Button> */}
    <Button variant="primary"  onClick={() =>window.print()}>Go somewhere</Button>
  </Card.Body>
</Card>

</div>
        

        
        </>
        )

}


export default Thanks;
