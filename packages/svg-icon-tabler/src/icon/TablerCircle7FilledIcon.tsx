import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircle7FilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircle7FilledIcon = React.forwardRef<SVGSVGElement, TablerCircle7FilledIconProps>(
	function TablerCircle7FilledIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				fill="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				strokeWidth={0}
				stroke="none"
			>
				<path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10zm2 5h-4l-.117 .007a1 1 0 0 0 -.876 .876l-.007 .117l.007 .117a1 1 0 0 0 .876 .876l.117 .007h2.718l-1.688 6.757l-.022 .115a1 1 0 0 0 1.927 .482l.035 -.111l2 -8l.021 -.112a1 1 0 0 0 -.878 -1.125l-.113 -.006z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircle7FilledIcon.displayName = "TablerCircle7FilledIcon";
}
