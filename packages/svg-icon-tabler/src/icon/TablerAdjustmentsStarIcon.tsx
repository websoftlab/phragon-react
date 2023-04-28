import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAdjustmentsStarIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAdjustmentsStarIcon = React.forwardRef<SVGSVGElement, TablerAdjustmentsStarIconProps>(
	function TablerAdjustmentsStarIcon(props, ref) {
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
				<path d="M12 4v9.5" />
				<path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
				<path d="M18 4v1" />
				<path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
				<path d="M18 9v1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAdjustmentsStarIcon.displayName = "TablerAdjustmentsStarIcon";
}
