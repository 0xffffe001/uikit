import Class from './class';
import Container from './container';
import Masonry from './grid-masonry';
import Modal from './modal';
import Position from './position';
import Togglable from './togglable';

export { Class, Container, Modal, Position, Togglable, Masonry };

export default function (UIkit) {

    UIkit.mixin.class = Class;
    UIkit.mixin.container = Container;
    UIkit.mixin.Masonry = Masonry;
    UIkit.mixin.modal = Modal;
    UIkit.mixin.position = Position;
    UIkit.mixin.togglable = Togglable;

}
