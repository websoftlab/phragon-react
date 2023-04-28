import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFreezeColumnIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFreezeColumnIcon = React.forwardRef<SVGSVGElement, TablerFreezeColumnIconProps>(
	function TablerFreezeColumnIcon(props, ref) {
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
				<path d="M9 9.5l-6 6" />
				<path d="M9 4l-6 6" />
				<path d="M9 15l-5 5" />
				<path d="M9 3v18" />
				<path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFreezeColumnIcon.displayName = "TablerFreezeColumnIcon";
}
