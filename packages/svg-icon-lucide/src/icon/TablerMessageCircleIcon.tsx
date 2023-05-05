import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMessageCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMessageCircleIcon = React.forwardRef<SVGSVGElement, TablerMessageCircleIconProps>(
	function TablerMessageCircleIcon(props, ref) {
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
				<path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMessageCircleIcon.displayName = "TablerMessageCircleIcon";
}
