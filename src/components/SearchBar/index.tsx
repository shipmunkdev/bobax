import Form from 'react-bootstrap/Form';

const SearchBar = () => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Search for Drinks names" />
            </Form.Group>
        </Form>
    )
}

export default SearchBar
