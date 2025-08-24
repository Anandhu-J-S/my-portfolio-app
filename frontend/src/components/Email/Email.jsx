import "../Email/Email.css"
import { useForm } from 'react-hook-form';



export default function EmailForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Email sent to Anandhu:', data);
    alert('Email "sent" (check console).');
    reset();
  };

  return (
    <div className="gmail-container">
      <form className="gmail-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="gmail-header">Connect With Me</div>

        <div className="gmail-field">
          <label>To</label>
          <input
            type="email"
            value="anandhujs1920@gmail.com"
            disabled
          />
        </div>

        <div className="gmail-field">
          <input
            type="text"
            placeholder="Subject"
            {...register('subject', { required: 'Subject is required' })}
          />
          {errors.subject && (
            <p className="gmail-error">{errors.subject.message}</p>
          )}
        </div>

        <div className="gmail-field">
          <textarea
            placeholder="Compose your message..."
            rows={10}
            {...register('message', { required: 'Message is required' })}
          />
          {errors.message && (
            <p className="gmail-error">{errors.message.message}</p>
          )}
        </div>

        <div className="gmail-footer">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}
