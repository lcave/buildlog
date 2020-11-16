require 'test_helper'

class BuildThreadsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @build_thread = build_threads(:one)
  end

  test "should get index" do
    get build_threads_url, as: :json
    assert_response :success
  end

  test "should create build_thread" do
    assert_difference('BuildThread.count') do
      post build_threads_url, params: { build_thread: { title: @build_thread.title, user_id: @build_thread.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show build_thread" do
    get build_thread_url(@build_thread), as: :json
    assert_response :success
  end

  test "should update build_thread" do
    patch build_thread_url(@build_thread), params: { build_thread: { title: @build_thread.title, user_id: @build_thread.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy build_thread" do
    assert_difference('BuildThread.count', -1) do
      delete build_thread_url(@build_thread), as: :json
    end

    assert_response 204
  end
end
