import React, { useEffect, useState } from "react";
import Error from "../ui/Error";
import isValidEmail from "../../utils/isValidEmail";
import { useGetUserQuery } from "../../features/users/usersApi";
import { useDispatch, useSelector } from "react-redux";
import {
  conversationsApi,
  useAddConversationMutation,
  useEditConversationMutation,
} from "../../features/conversations/conversationsApi";

const Modal = ({ open, control }) => {
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const [userCheck, setUserCheck] = useState(false);

  // check the loggedIn user's email
  const { user: loggedInUser } = useSelector((state) => state.auth) || {};
  const { email: myEmail } = loggedInUser || {};
  // as we cannot use hooks in the functions(use them top) if we want to avoid using use(hooks), we can manually dispatch action in the functions.
  const dispatch = useDispatch();
  const [responseError, setResponseError] = useState("");
  const [conversation, setConversation] = useState(undefined);

  const { data: participant } = useGetUserQuery(to, {
    skip: !userCheck,
  });

  // conversations message checking
  const [addConversation, { isSuccess: isAddConversationSuccess }] =
    useAddConversationMutation();
  const [editConversation, { isSuccess: isEditConversationSuccess }] =
    useEditConversationMutation();

  // if we want to listen participant, we need to wait for useEffect call
  useEffect(() => {
    if (participant?.length > 0 && participant[0].email !== myEmail) {
      // check conversation exists or not
      // like async thunk dispatch
      dispatch(
        conversationsApi.endpoints.getConversation.initiate({
          userEmail: myEmail,
          participantEmail: to,
        })
        // if need promise, call unwrap() function. Now it is promise and try-catch or async-await can be used
      )
        .unwrap()
        .then((data) => {
          //console.log(data)
          setConversation(data);
        })
        .catch(() => setResponseError("There was a problem!"));
    }
  }, [participant, dispatch, myEmail, to]);
  // listen to conversation add/edit success
  useEffect(() => {
    if (isAddConversationSuccess || isEditConversationSuccess) {
      control();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAddConversationSuccess, isEditConversationSuccess]);
  const debounceHandler = (fn, delay) => {
    let timeOutId;
    return (...args) => {
      clearTimeout(timeOutId);
      timeOutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };
  const doSearch = (value) => {
    if (isValidEmail(value)) {
      // check user API
      setUserCheck(true);
      setTo(value);
    }
  };
  const handleSearch = debounceHandler(doSearch, 500);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form is submitted!");
    if (conversation?.length > 0) {
      // editConversation
      editConversation({
        id: conversation[0].id,
        sender: myEmail,
        data: {
          participants: `${myEmail}-${participant[0].email}`,
          users: [loggedInUser, participant[0]],
          message: message,
          timestamp: new Date().getTime(),
        },
      });
    } else if (conversation?.length === 0) {
      // add Conversation
      addConversation({
        sender: myEmail,
        data: {
          participants: `${myEmail}-${participant[0].email}`,
          users: [loggedInUser, participant[0]],
          message: message,
          timestamp: new Date().getTime(),
        },
      });
    }
  };
  return (
    <>
      {open && (
        <>
          <div
            className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
            onClick={control}
          ></div>
          <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900"></h2>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="to" className="sr-only">
                    To
                  </label>
                  <input
                    type="email"
                    id="to"
                    name="to"
                    required
                    onChange={(e) => handleSearch(e.target.value)}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                    placeholder="Send To"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    type="text"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={
                    conversation === undefined ||
                    (participant?.length > 0 &&
                      participant[0].email === myEmail)
                  }
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                >
                  Send Message
                </button>
              </div>
              {participant?.length === 0 && (
                <Error message="This user does not exist!" />
              )}
              {participant?.length > 0 && participant[0].email === myEmail && (
                <Error message="You can not text to yourself!" />
              )}
              {responseError && <Error message={responseError} />}
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
