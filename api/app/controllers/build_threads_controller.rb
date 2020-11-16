class BuildThreadsController < ApplicationController
  before_action :set_build_thread, only: [:show, :update, :destroy]

  # GET /build_threads
  def index
    @build_threads = BuildThread.all

    render json: @build_threads
  end

  # GET /build_threads/1
  def show
    render json: @build_thread
  end

  # POST /build_threads
  def create
    @build_thread = BuildThread.new(build_thread_params)

    if @build_thread.save
      render json: @build_thread, status: :created, location: @build_thread
    else
      render json: @build_thread.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /build_threads/1
  def update
    if @build_thread.update(build_thread_params)
      render json: @build_thread
    else
      render json: @build_thread.errors, status: :unprocessable_entity
    end
  end

  # DELETE /build_threads/1
  def destroy
    @build_thread.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_build_thread
      @build_thread = BuildThread.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def build_thread_params
      params.require(:build_thread).permit(:title, :user_id)
    end
end
