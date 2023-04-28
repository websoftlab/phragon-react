import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDropletFilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDropletFilledIcon = React.forwardRef<SVGSVGElement, TablerDropletFilledIconProps>(
	function TablerDropletFilledIcon(props, ref) {
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
				<path d="M6.801 11.003a6 6 0 1 0 10.396 -.003l-5.197 -8l-5.199 8.003z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDropletFilledIcon.displayName = "TablerDropletFilledIcon";
}
