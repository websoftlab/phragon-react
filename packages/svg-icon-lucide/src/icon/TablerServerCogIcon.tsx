import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerServerCogIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerServerCogIcon = React.forwardRef<SVGSVGElement, TablerServerCogIconProps>(
	function TablerServerCogIcon(props, ref) {
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
				<path d="M5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1" />
				<path d="M5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-1" />
				<path d="M6 6h.01" />
				<path d="M6 18h.01" />
				<path d="M15 12 A3 3 0 0 1 12 15 A3 3 0 0 1 9 12 A3 3 0 0 1 15 12" />
				<path d="M12 8v1" />
				<path d="M12 15v1" />
				<path d="M16 12h-1" />
				<path d="M9 12H8" />
				<path d="m15 9-.88.88" />
				<path d="M9.88 14.12 9 15" />
				<path d="m15 15-.88-.88" />
				<path d="M9.88 9.88 9 9" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerServerCogIcon.displayName = "TablerServerCogIcon";
}
