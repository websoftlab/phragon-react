import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRectangleFilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRectangleFilledIcon = React.forwardRef<SVGSVGElement, TablerRectangleFilledIconProps>(
	function TablerRectangleFilledIcon(props, ref) {
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
				<path d="M19 4h-14a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRectangleFilledIcon.displayName = "TablerRectangleFilledIcon";
}
