import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDropletHalfIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDropletHalfIcon = React.forwardRef<SVGSVGElement, TablerDropletHalfIconProps>(
	function TablerDropletHalfIcon(props, ref) {
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
				<path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z" />
				<path d="M12 3v17" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDropletHalfIcon.displayName = "TablerDropletHalfIcon";
}
