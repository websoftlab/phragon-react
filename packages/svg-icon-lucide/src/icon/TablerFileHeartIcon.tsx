import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileHeartIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileHeartIcon = React.forwardRef<SVGSVGElement, TablerFileHeartIconProps>(
	function TablerFileHeartIcon(props, ref) {
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
				<path d="M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4" />
				<path d="M14 2 L14 8 L20 8" />
				<path d="M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFileHeartIcon.displayName = "TablerFileHeartIcon";
}
