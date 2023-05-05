import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClapperboardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClapperboardIcon = React.forwardRef<SVGSVGElement, TablerClapperboardIconProps>(
	function TablerClapperboardIcon(props, ref) {
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
				<path d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8H4Z" />
				<path d="m4 11-.88-2.87a2 2 0 0 1 1.33-2.5l11.48-3.5a2 2 0 0 1 2.5 1.32l.87 2.87L4 11.01Z" />
				<path d="m6.6 4.99 3.38 4.2" />
				<path d="m11.86 3.38 3.38 4.2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerClapperboardIcon.displayName = "TablerClapperboardIcon";
}
