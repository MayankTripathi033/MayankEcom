import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2>Contact Page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.9082395791647!2d77.18856777538319!3d28.69239137563214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d020b038fd133%3A0xf8adb1d0f49de35b!2sShri%20Guru%20Tegh%20Bahadur%20Institute%20of%20Management%20and%20Information%20Technology!5e0!3m2!1sen!2sin!4v1707153456001!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mpzvpydz"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              autoComplete="off"
              isRequired
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              autoComplete="off"
              isRequired
            />
            <textarea
              name="Message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              isRequired
            ></textarea>
            <input type="submit" value="Send" isRequired />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
