import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBoxMultiple3IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBoxMultiple3Icon = React.forwardRef<SVGSVGElement, TablerBoxMultiple3IconProps>(
	function TablerBoxMultiple3Icon(props, ref) {
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
				<path d="M7 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
				<path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
				<path d="M14 10a2 2 0 1 0 -2 -2" />
				<path d="M12 12a2 2 0 1 0 2 -2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBoxMultiple3Icon.displayName = "TablerBoxMultiple3Icon";
}
