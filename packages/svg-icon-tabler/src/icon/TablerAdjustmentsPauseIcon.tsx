import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAdjustmentsPauseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAdjustmentsPauseIcon = React.forwardRef<SVGSVGElement, TablerAdjustmentsPauseIconProps>(
	function TablerAdjustmentsPauseIcon(props, ref) {
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
				<path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
				<path d="M6 4v4" />
				<path d="M6 12v8" />
				<path d="M13.627 14.836a2 2 0 1 0 -.62 2.892" />
				<path d="M12 4v10" />
				<path d="M12 18v2" />
				<path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
				<path d="M18 4v1" />
				<path d="M17 17v5" />
				<path d="M21 17v5" />
				<path d="M18 9v4.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAdjustmentsPauseIcon.displayName = "TablerAdjustmentsPauseIcon";
}
