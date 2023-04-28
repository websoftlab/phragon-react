import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFilterCogIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFilterCogIcon = React.forwardRef<SVGSVGElement, TablerFilterCogIconProps>(
	function TablerFilterCogIcon(props, ref) {
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
				<path d="M12 20l-3 1v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v1.5" />
				<path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M19.001 15.5v1.5" />
				<path d="M19.001 21v1.5" />
				<path d="M22.032 17.25l-1.299 .75" />
				<path d="M17.27 20l-1.3 .75" />
				<path d="M15.97 17.25l1.3 .75" />
				<path d="M20.733 20l1.3 .75" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFilterCogIcon.displayName = "TablerFilterCogIcon";
}
