class Api::MessagesController < ApplicationController

  before_action :require_logged_in, only: [:create, :destroy]

  def create
    @message = Message.new(message_params)
    @message.author_id = current_user.id

    if @message.save
      render :show
    else
      render json: @message.errors.full_messages
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
    params.require(:message).permit(:author_id, :receiver_id, :body)
  end

end
