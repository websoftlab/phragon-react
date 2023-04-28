import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVirusSearchIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVirusSearchIcon = React.forwardRef<SVGSVGElement, TablerVirusSearchIconProps>(
	function TablerVirusSearchIcon(props, ref) {
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
				<path d="M17 12a5 5 0 1 0 -5 5" />
				<path d="M12 7v-4" />
				<path d="M11 3h2" />
				<path d="M15.536 8.464l2.828 -2.828" />
				<path d="M17.657 4.929l1.414 1.414" />
				<path d="M17 12h4" />
				<path d="M21 11v2" />
				<path d="M12 17v4" />
				<path d="M13 21h-2" />
				<path d="M8.465 15.536l-2.829 2.828" />
				<path d="M6.343 19.071l-1.413 -1.414" />
				<path d="M7 12h-4" />
				<path d="M3 13v-2" />
				<path d="M8.464 8.464l-2.828 -2.828" />
				<path d="M4.929 6.343l1.414 -1.413" />
				<path d="M17.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
				<path d="M19.5 19.5l2.5 2.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerVirusSearchIcon.displayName = "TablerVirusSearchIcon";
}
