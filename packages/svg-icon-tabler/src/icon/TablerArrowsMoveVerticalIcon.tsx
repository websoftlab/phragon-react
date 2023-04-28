import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsMoveVerticalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsMoveVerticalIcon = React.forwardRef<SVGSVGElement, TablerArrowsMoveVerticalIconProps>(
	function TablerArrowsMoveVerticalIcon(props, ref) {
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
	TablerArrowsMoveVerticalIcon.displayName = "TablerArrowsMoveVerticalIcon";
}
