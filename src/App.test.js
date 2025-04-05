import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';
import SingleBook from './components/SingleBook';

describe('main rendering tests', () => {
  it('renders Welcome component', () => {
    act (() => render(<App />))
    const mainHeader = screen.getByRole('heading', {
      name: /Benvenuti in EpiBooks!/i,
    })
    expect(mainHeader).toBeInTheDocument()
  })


  it('renders 300 books', async () => {
    render(<App />);
    screen.debug();
    
    const AllTheBooks = await screen.findAllByTestId('card-book');
    
    expect(AllTheBooks.length).toBe(300);
  });
  
  it('render CommentArea component', () => {
    act (() => render(<App />))
    const commentArea = screen.getByPlaceholderText(/Cerca un libro.../i)
    expect(commentArea).toBeInTheDocument()
  })
})

  describe('filtered nav tests for the word "man" find six results', () => {
    it('render filtered nav', () => {
      act (() => render(<App />))
      const filteredNav = screen.getByPlaceholderText(/Cerca un libro.../i)
    fireEvent.change(filteredNav, { target: { value: 'man' } })
    expect(filteredNav).toBeInTheDocument()
    })
  

  it('two result for the word "gods"',async () => {
    act (() => render(<App />))
    screen.debug();
    const filteredNav = screen.getByPlaceholderText(/Cerca un libro.../i)
    fireEvent.change(filteredNav, { target: { value: 'gods' } })
    const AllTheBooks = await screen.findAllByTestId('card-book');
    expect(AllTheBooks.length).toBe(2);
  })
})

  describe('SingleBook testing border', () => {
    it('SingleBook testing border',async () => {
     render(<App />);
     const SingleBookCard =await screen.findAllByTestId('card-book');
    const cardBook = SingleBookCard[0];
    fireEvent.click(cardBook);
     expect(cardBook).toHaveStyle('border: 3px solid red');
    })

    it('after clicking on SingleBook border should be removed',async () => {
      render(<App />);
      const SingleBookCard =await screen.findAllByTestId('card-book');
     const cardBook = SingleBookCard[0];
     fireEvent.click(cardBook);
      expect(cardBook).toHaveStyle('border: 3px solid red');
      const cardBook2 = SingleBookCard[1];
      fireEvent.click(cardBook2);
       expect(cardBook).not.toHaveStyle('border: 3px solid red');
     })
  })

  describe('render home page ', () => {
    it('render no comments in home page', () => {
      render(<App />);
      const commentArea=screen.queryAllByTestId('single-comment');
      expect(commentArea.length).toBe(0);
    })

    it('render  comments clicking on SingleBook',async () => {
      render(<App />);
      const SingleBookCard =await screen.findAllByTestId('card-book');
      const cardBook = SingleBookCard[0];
      fireEvent.click(cardBook);
      const commentArea= screen.findAllByTestId('single-comment');
      expect(commentArea.length).not.toBe(0);
    })
  })