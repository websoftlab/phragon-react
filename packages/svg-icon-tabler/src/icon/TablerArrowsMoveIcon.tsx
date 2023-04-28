import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsMoveIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsMoveIcon = React.forwardRef<SVGSVGElement, TablerArrowsMoveIconProps>(
	function TablerArrowsMoveIcon(props, ref) {
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
				<path d="M18 9l3 3l-3 3" />
				<path d="M15 12h6" />
				<path d="M6 9l-3 3l3 3" />
				<path d="M3 12h6" />
				<path d="M9 18l3 3l3 -3" />
				<path d="M12 15v6" />
				<path d="M15 6l-3 -3l-3 3" />
				<path d="M12 3v6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsMoveIcon.displayName = "TablerArrowsMoveIcon";
}
