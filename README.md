##Installation guide
1. Installing Ruby
   Rails requires Ruby version 2.7.0 or later. It is preferred to use latest Ruby version. If the version number returned is less than that number (such as 2.3.7, or 1.8.7), you'll need to install a fresh copy of Ruby.
   To install Rails on Windows, you'll first need to install Ruby Installer from https://rubyinstaller.org/.
   For more installation methods for most Operating Systems take a look at ruby-lang.org.
2. Installing PostgreSQL
   $ gem install pg
3. Installing Node.js
   Find the installation instructions at the Node.js website and verify it's installed correctly with the following command:
   $ node --version
   The version of your Node.js runtime should be printed out. Make sure it's greater than 8.16.0.
4. Installing npm
   npm install -g npm
   If it says something like "1.22.0", Yarn has been installed correctly.
6. Installing Rails
   To install Rails, use the gem install command provided by RubyGems:
   $ gem install rails
   To verify that you have everything installed correctly, you should be able to run the following in a new terminal:
   $ rails --version
   If it says something like "Rails 7.0.0", you are ready to continue.

   ## Project setup
   ```
   npm install
   ```

   ### Compiles and hot-reloads for development
   ```
   npm run serve
   ```

   ### Compiles and minifies for production
   ```
   npm run build
   ```

   ### Run your unit tests
   ```
   npm run test:unit
   ```

   ### Lints and fixes files
   ```
   npm run lint
   ```

   ### Customize configuration
   See [Configuration Reference](https://cli.vuejs.org/config/).