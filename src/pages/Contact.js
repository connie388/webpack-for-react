const Contact = () => {
  return (
    <>
      <h1>
        Contact Me
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              aria-describedby="nameHelp"
              placeholder="Enter name"
            />
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input
              type="text"
              class="form-control"
              id="subject"
              placeholder="Subject"
            />
          </div>
          <div class="form-group">
            <label class="form-check-label" for="msgTextarea">
              Message
            </label>
            <textarea class="form-control" id="msgTextarea" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </h1>
    </>
  );
};

export default Contact;
