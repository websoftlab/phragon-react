import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerColumnInsertRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerColumnInsertRightIcon = React.forwardRef<SVGSVGElement, TablerColumnInsertRightIconProps>(
	function TablerColumnInsertRightIcon(props, ref) {
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
				<path d="M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1z" />
				<path d="M15 12l4 0" />
				<path d="M17 10l0 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerColumnInsertRightIcon.displayName = "TablerColumnInsertRightIcon";
}
