import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircleOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircleOffIcon = React.forwardRef<SVGSVGElement, TablerCircleOffIconProps>(
	function TablerCircleOffIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				fill="none"
			>
				<path d="m2 2 20 20" />
				<path d="M8.4 2.7c1.2-.4 2.4-.7 3.7-.7 5.5 0 10 4.5 10 10 0 1.3-.2 2.5-.7 3.6" />
				<path d="M19.1 19.1C17.3 20.9 14.8 22 12 22 6.5 22 2 17.5 2 12c0-2.7 1.2-5.2 3-7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircleOffIcon.displayName = "TablerCircleOffIcon";
}
