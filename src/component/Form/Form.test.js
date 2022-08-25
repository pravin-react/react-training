import { render, fireEvent,screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from "./Form";

describe('<Form />', () => {
    
    test('render email input', () => {
      render(<Form />);
      const inputEl = screen.getByTestId('name-input');
      const inputE2 = screen.getByTestId('phone-input');
      const inputE3 = screen.getByTestId('email-input');
      const inputE4 = screen.getByTestId("message-input");


      expect(inputEl).toBeInTheDocument();
      expect(inputEl).toHaveAttribute('type', 'text');
      expect(inputE2).toBeInTheDocument();
      expect(inputE2).toHaveAttribute('type', 'text');
      expect(inputE3).toBeInTheDocument();
      expect(inputE3).toHaveAttribute('type', 'text');

      expect(inputE4).toBeInTheDocument();

    });

    test('pass valid name to test name input field', () => {
        render(<Form />);
    
        const inputEl = screen.getByTestId('name-input');
        userEvent.type(inputEl, 'john');
    
        expect(screen.getByTestId('name-input')).toHaveValue('john');
        expect(screen.queryByTestId('error-msg')).not.toBeInTheDocument();
    });

    test('pass valid phone to test phone input field', () => {
        render(<Form />);
    
        const inputE2 = screen.getByTestId('phone-input');
        userEvent.type(inputE2, '9000000000');
    
        expect(screen.getByTestId('phone-input')).toHaveValue('9000000000');
        expect(screen.queryByTestId('error-msg')).not.toBeInTheDocument();
    });

  
    test('pass valid email to test email input field', () => {
      render(<Form />);
  
      const inputE3 = screen.getByTestId('email-input');
      userEvent.type(inputE3, 'test@mail.com');
  
      expect(screen.getByTestId('email-input')).toHaveValue('test@mail.com');
      expect(screen.queryByTestId('error-msg')).not.toBeInTheDocument();
    });

    test('pass valid message to test message input field', () => {
        render(<Form />);
    
        const inputE4 = screen.getByTestId('message-input');
        userEvent.type(inputE4, 'sample text');
    
        expect(screen.getByTestId('message-input')).toHaveValue('sample text');
        expect(screen.queryByTestId('error-msg')).not.toBeInTheDocument();
      });
});