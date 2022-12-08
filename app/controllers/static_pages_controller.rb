# class StaticPagesController < ApplicationController
#   def root
#   end
# end

class StaticPagesController < ApplicationController
  def frontend_index
    render file: Rails.root.join('public', 'index.html')
  end
end