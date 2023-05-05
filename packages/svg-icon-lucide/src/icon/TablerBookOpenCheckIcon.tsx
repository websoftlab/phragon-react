import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBookOpenCheckIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBookOpenCheckIcon = React.forwardRef<SVGSVGElement, TablerBookOpenCheckIconProps>(
	function TablerBookOpenCheckIcon(props, ref) {
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
				<path d="M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z" />
				<path d="m16 12 2 2 4-4" />
				<path d="M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBookOpenCheckIcon.displayName = "TablerBookOpenCheckIcon";
}
