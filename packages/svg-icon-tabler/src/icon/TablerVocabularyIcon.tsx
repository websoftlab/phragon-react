import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVocabularyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVocabularyIcon = React.forwardRef<SVGSVGElement, TablerVocabularyIconProps>(
	function TablerVocabularyIcon(props, ref) {
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
				<path d="M10 19h-6a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h6a2 2 0 0 1 2 2a2 2 0 0 1 2 -2h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2z" />
				<path d="M12 5v16" />
				<path d="M7 7h1" />
				<path d="M7 11h1" />
				<path d="M16 7h1" />
				<path d="M16 11h1" />
				<path d="M16 15h1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerVocabularyIcon.displayName = "TablerVocabularyIcon";
}
