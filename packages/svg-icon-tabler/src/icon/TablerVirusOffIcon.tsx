import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVirusOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVirusOffIcon = React.forwardRef<SVGSVGElement, TablerVirusOffIconProps>(function TablerVirusOffIcon(
	props,
	ref
) {
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
			<path d="M3 3l18 18" />
			<path d="M8.469 8.46a5 5 0 0 0 7.058 7.084" />
			<path d="M16.913 12.936a5 5 0 0 0 -5.826 -5.853" />
			<path d="M12 7v-4" />
			<path d="M11 3h2" />
			<path d="M15.536 8.464l2.828 -2.828" />
			<path d="M17.657 4.929l1.414 1.414" />
			<path d="M17 12h4" />
			<path d="M21 11v2" />
			<path d="M18.364 18.363l-.707 .707" />
			<path d="M12 17v4" />
			<path d="M13 21h-2" />
			<path d="M8.465 15.536l-2.829 2.828" />
			<path d="M6.343 19.071l-1.413 -1.414" />
			<path d="M7 12h-4" />
			<path d="M3 13v-2" />
			<path d="M5.636 5.637l-.707 .707" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerVirusOffIcon.displayName = "TablerVirusOffIcon";
}
