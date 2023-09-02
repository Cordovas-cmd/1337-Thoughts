const { User, Thought } = require('../models');

const resolvers = {
    Query: {
      /*pass in the parent as more of a placeholder parameter. 
      It won't be used, but we need something in that first parameter's 
      spot so we can access the username argument from the second parameter. */
        thoughts: async (parent, { username }) => {
            const params = username ? { username } : {};
            // Sorted in descending order
            return Thought.find(params).sort({ createdAt: -1 });
          },
    }
  };
module.exports = resolvers;


/*In apollo graph ql query should look like the following:
 query {
  thoughts {
    _id
    username
    thoughtText
    createdAt
  }
}
*/