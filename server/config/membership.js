'use strict'

const config = {
  site: require('./site'),
}

module.exports = {
  invite: {
    from: config.site.title + ' Robot <' + config.site.emails.robot + '>',
    subject: 'You have been invited to ' + config.site.title,
  },

  timeouts: {
    // 1 day
    changePassword: 24 * 60 * 60 * 1000,
    // verify email
    verifyEmail: 7 * 24 * 60 * 60 * 1000,
  },

  paths: {
    register: '/register',
    login: '/login',
    forgotPassword: '/forgot-password',
    updatePassword: '/change-password',
    verifyEmail: '/verify-email',
  },

  redirects: {
    login: '/',
    logout: '/',
    register: '/',
  },

  remember: {
    // if expires is defined, it will be used. otherwise maxage
    expires: new Date('2038-01-19T03:14:07.000Z'),
    // expires: Date.now() - 1,
    maxAge: 30 * 24 * 60 * 60 * 1000,
  },

  errors: {
    login: {
      notLocal: ['Account requires external login.', 400],
      wrongPassword: ['Wrong password.', 401],
      noUserFound: ['No user registered with that email.', 400],
      noExternalUser: ['The account is not connected to this website.', 400],
      externalLoginFailed: ['External login failed.', 504],
      emailNotVerified: ['This account\'s email has not been verified.', 401],
      banned: ['User is banned.', 401],
      blocked: ['User is blocked due to too many login attempts.', 401],
    },

    register: {
      missingProperties: ['Oh no missing stuff', 422],
      notAuthorized: ['The email is not authorized to create an account.', 401],
      duplicateEmail: ['The email has already been registered.', 409],
    },
  },

  // needs to be even
  tokenLength: 64,
  // needs to be even
  saltLength: 16,

  // default columns that will be returned by select queries
  userColumns: ['givenName', 'familyName', 'mutedAt', 'verifiedAt'],

  // will be pushed to the pick array, which by default is ['id', 'username', 'email', 'roles']
  serializeColumns: ['givenName', 'familyName', 'mutedAt', 'verifiedAt'],

  queries: {
    getAuthenticationDetails: `
      SELECT
          id,
          email,
          password,
          date_email_verified as "dateEmailVerified",
          date_banned as "dateBanned",
          date_blocked as "dateBlocked",
          array(SELECT name FROM user_roles LEFT OUTER JOIN roles ON user_roles.role_id = roles.id WHERE user_roles.user_id = users.id) as roles,
          users.given_name as "givenName",
          users.family_name as "familyName",
          users.date_muted as "dateMuted",
          users.date_verified as "dateVerified",
          array(SELECT publishers.id FROM user_publishers LEFT OUTER JOIN publishers ON user_publishers.publisher_id = publishers.id WHERE user_publishers.user_id = users.id) as publishers
        FROM users 
        WHERE email = $1;
    `,
  },
}
