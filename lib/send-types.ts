/**
   * Create a alert notification.
   * 
   * ```js
   * send('createAlert', {
   *   message: 'My alert message'
   * })
   * ```
   */
 export type createAlert = {
  responseType: void,
  /**
   * This message will be shown in the alert
   */
  message: string
}

/**
   * Redirect to another URL
   * 
   * ```js
   * send('redirect', {
   *   url: 'https://www.shopware.com',
   *   newTab: true
   * })
   * ```
   */
export type redirect = {
  responseType: void,
  /**
   * The URL for the redirection
   */
  url: string,
  /**
   * If this is activated then the link will be opened in a new tab
   */
  newTab: boolean
}

/**
 * Get the actual page title
 * ```js
 * send('redirect', {}).then(pageTitle => {
 *   console.log(pageTitle)
 * })
 * ```
 */
export type getPageTitle = {
  responseType: string
}