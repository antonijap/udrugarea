###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

activate :blog do |blog|
  blog.prefix = "blog"
  blog.permalink = "/{title}"
  blog.name = "blog"
  blog.sources = "{title}.html"
  blog.layout = "layouts/article"
end

activate :blog do |blog|
  blog.prefix = "udomi"
  blog.permalink = "/{title}"
  blog.name = "udomi"
  blog.sources = "{title}.html"
  blog.layout = "layouts/udomi"
end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

activate :directory_indexes

# Build-specific configuration
configure :build do
  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript
end

# activate :deploy do |deploy|
#   deploy.deploy_method = :ftp
#   deploy.host          = 'admin@udrugarea.hr'
#   deploy.path          = ''
#   # Optional Settings
#   deploy.user  = 'admin' # no default
#   # deploy.port  = 21098  # ssh port, default: 22
#   deploy.clean = true # remove orphaned files on remote host, default: false
#   # deploy.flags = '-rltgoDvzO --no-p --del' # add custom flags, default: -avz
# end

activate :deploy do |deploy|
  deploy.deploy_method = :git
  # Optional Settings
  deploy.remote   = 'git@github.com:antonijap/udrugarea.git' # remote name or git url, default: origin
  deploy.branch   = 'master' # default: gh-pages
  # deploy.strategy = :submodule      # commit strategy: can be :force_push or :submodule, default: :force_push
  # deploy.commit_message = 'custom-message'      # commit message (can be empty), default: Automated commit at `timestamp` by middleman-deploy `version`
end

# activate :deploy do |deploy|
#   deploy.deploy_method   = :ftp
#   deploy.host            = 'ftp.udrugarea.hr'
#   deploy.path            = '/home/antonija/public_html'
#   deploy.user            = 'admin'
#   deploy.password        = 'reajezakon1'
# end
