import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Answer() {

    return (
        <Container><hr />
            <Row>
                <Col className='cursor-pointer'>Add Question </Col>
                <Col>Creat Post</Col><hr />
                <h1>Tips on getting good answers quickly</h1>
                <h4> &middot;Make sure your question has not been asked already</h4>
                <h4> &middot;Keep your question short and to the point</h4>
                <h4> &middot;Double-check grammar and spelling</h4>
            </Row><hr />
            <a className="navbar-brand" href="Home">
                <img src='' alt="Profile photo" width="80" height="50" />
                <textarea className="form-control" rows="2" placeholder="Start your question with 'What','How','why',etc."></textarea>
                <hr />

            </a><hr />

            <h1 className="cursor-pointer bg-red-700 rounded-full text-sm text-danger w-32 pl-6 pt-2 ml-5 h-9 btn btn-outline-danger"
                onClick={() => (true)} >Add question</h1>





        </Container>
    );
}

export default Answer;