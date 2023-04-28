import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSquareToggleHorizontalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSquareToggleHorizontalIcon = React.forwardRef<SVGSVGElement, TablerSquareToggleHorizontalIconProps>(
	function TablerSquareToggleHorizontalIcon(props, ref) {
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
				<path d="M22 12h-20" />
				<path d="M4 14v-8a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" />
				<path d="M18 20a2 2 0 0 0 2 -2" />
				<path d="M4 18a2 2 0 0 0 2 2" />
				<path d="M14 20l-4 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSquareToggleHorizontalIcon.displayName = "TablerSquareToggleHorizontalIcon";
}
