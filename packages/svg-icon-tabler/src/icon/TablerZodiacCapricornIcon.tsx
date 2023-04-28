import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerZodiacCapricornIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerZodiacCapricornIcon = React.forwardRef<SVGSVGElement, TablerZodiacCapricornIconProps>(
	function TablerZodiacCapricornIcon(props, ref) {
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
				<path d="M4 4a3 3 0 0 1 3 3v9" />
				<path d="M7 7a3 3 0 0 1 6 0v11a3 3 0 0 1 -3 3" />
				<path d="M16 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerZodiacCapricornIcon.displayName = "TablerZodiacCapricornIcon";
}
