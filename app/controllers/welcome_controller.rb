class WelcomeController < ApplicationController
  def index
    @slideshow = [
        {
            :name => "motel-from-road",
            :caption => "The motel is located on Mother Road Route 66."
        },
        {
            :name => "motel-king-room",
            :caption => "Our spacious King room comes fully equiped."
        },
        {
            :name => "motel-pool",
            :caption => "Finish your day in our refreshing pool."
        },
        {
            :name => "needles-wagon",
            :caption => "Needles famous landmark, the Needlles Wagon"
        },
    ]
  end
end
