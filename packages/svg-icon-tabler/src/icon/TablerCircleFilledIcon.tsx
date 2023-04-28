import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircleFilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircleFilledIcon = React.forwardRef<SVGSVGElement, TablerCircleFilledIconProps>(
	function TablerCircleFilledIcon(props, ref) {
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
				<path d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircleFilledIcon.displayName = "TablerCircleFilledIcon";
}
