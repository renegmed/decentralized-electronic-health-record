export default `
.level1:before {
  content: ' ';
  display: inline-block;
  width: 8px;
  height: 8px;
  background: blue;
  border-radius: 8px;
  margin: 0 8px;
  opacity: 0.8;
}
.level1 {
  border-radius: 20px;
  padding-right: 12px;
  margin: -12px;
  color: transparent;
  opacity: 0.8;
  line-height: 24px;
  font-size: 13px;
  white-space: nowrap;
}
.level1 span {
  display: none;
}
.level1:hover {
  background: rgba(0,0,0,0.8);
  color: #fff;
}
.level1:hover span {
  display: inline-block;
}

.level2:before {
  content: ' ';
  display: inline-block;
  width: 8px;
  height: 8px;
  background: orange;
  border-radius: 8px;
  margin: 0 8px;
  opacity: 0.8;
}
.level2 {
  border-radius: 20px;
  padding-right: 12px;
  margin: -12px;
  color: transparent;
  opacity: 0.8;
  line-height: 24px;
  font-size: 13px;
  white-space: nowrap;
}
.level2 span {
  display: none;
}
.level2:hover {
  background: rgba(0,0,0,0.8);
  color: #fff;
}
.level2:hover span {
  display: inline-block;
}

.level3:before {
    content: ' ';
    display: inline-block;
    width: 8px;
    height: 8px;
    background: red;
    border-radius: 8px;
    margin: 0 8px;
    opacity: 0.8;
}
.level3 {
    border-radius: 20px;
    padding-right: 12px;
    margin: -12px;
    color: transparent;
    opacity: 0.8;
    line-height: 24px;
    font-size: 13px;
    white-space: nowrap;
}
.level3 span {
    display: none;
}
.level3:hover {
    background: rgba(0,0,0,0.8);
    color: #fff;
}
.level3:hover span {
    display: inline-block;
}
`;
