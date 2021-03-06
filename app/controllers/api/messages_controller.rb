class Api::MessagesController < ApplicationController

  before_action :require_logged_in, only: [:create, :destroy]

  def index
    @messages = Message.where(receiver_id: params[:user_id])
    render :index
  end

  def create
    @message = Message.new(message_params)

    if !@message.save
      render json: ["Message minimum length 10"], status: 401
    end
  end

  def destroy
    @message = Message.find_by(id: params[:id])

    if @message
      Message.delete(@message)
    end
  end

  private
  def message_params
    params.require(:message).permit(:author_id, :receiver_id, :body, :author_name)
  end

end
